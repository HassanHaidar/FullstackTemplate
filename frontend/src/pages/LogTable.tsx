import { useEffect, useState } from "react";
import LogFilter from "../components/LogFilters";
import UploadFile from "../components/UploadFile";

interface Log {
    timestamp : string,
    service : string,
    severity : string,
    message : string,
    requestId : string
}


interface Filter {
    service: string,
    severity: string
}

const BASE_URL = `http://localhost:8000`


const LogsTable: React.FC = () => {
    const [logs, setLogs] = useState<Log[]>([]);
    const [filter, setFilter] = useState<Filter>({ service: '', severity: '' });
    const [availableServices, setAvailableServices] = useState<string[]>([]);
    const [availableSeverities, setAvailableSeverities] = useState<string[]>([]);

    const fetchLogs = () => {
        fetch(`${BASE_URL}/logs`)
        .then((r: Response)  => r.json())
        .then((allLogs: Log[]) => {
            const services = Array.from(new Set(allLogs.map(log => log.service)));
            const severities = Array.from(new Set(allLogs.map(log => log.severity)));
            setAvailableServices(services);
            setAvailableSeverities(severities);
            setLogs(allLogs)
        });
    }

    useEffect(() => {
        const params = new URLSearchParams();
        if (filter.service) {
            params.append('service', filter.service);
        }
        if (filter.severity) {
            params.append('severity', filter.severity);
        }
        const queryString = params.toString();
        const url = `${BASE_URL}/logs${queryString ? '?' + queryString : ''}`
        fetch(url)
        .then(r => r.json())
        .then(setLogs);
    }, [filter])

    useEffect(() => {
        fetchLogs()
    }, []);

    return (
        <div style = {{ width: '5 rem'}}>
            <h1>Logs</h1>
            <div className="flex gap-12">
                <LogFilter
                    onFilterChange={setFilter}
                    services={availableServices}
                    severities={availableSeverities}
                />
                <UploadFile onSuccessfulUpload={fetchLogs}></UploadFile>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff', width: '15%' }}>Request ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff', width: '15%' }}>Timestamp</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff', width: '15%' }}>Service</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff', width: '10%' }}>Severity</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff', width: '45%' }}>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map(log => (
                        <tr key={log.requestId}>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{log.requestId}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{log.timestamp}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{log.service}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{log.severity}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{log.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LogsTable;