interface Filter {
    service: string,
    severity: string
}

interface LogFilterProps {
    onFilterChange: (filter: Filter) => void;
    services: string[];
    severities: string[];
}

export default function LogFilter({ onFilterChange, services, severities }: LogFilterProps) {
    const getFilterValue = (field: string) : string => {
        const fieldValue = (document.getElementById(field) as HTMLSelectElement)?.value;
        if (fieldValue === 'All' || fieldValue === '') {
            return '';
        }
        return fieldValue;
    }

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const serviceValue = e.target.value === 'All' ? '' : e.target.value;
        onFilterChange({
            service: serviceValue,
            severity: getFilterValue('severity-select')
        });
    };

    const handleSeverityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const severityValue = e.target.value === 'All' ? '' : e.target.value;
        onFilterChange({
            service: getFilterValue('service-select'),
            severity: severityValue
        });
    };

    return (
        <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div>
                <label htmlFor="service-select" style={{ marginRight: '8px' }}>Service:</label>
                <select
                    id="service-select"
                    onChange={handleServiceChange}
                    style={{ padding: '5px', minWidth: '150px' }}
                >
                    <option style={{border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff' }} value="">All</option>
                    {services.map(service => (
                        <option style={{border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff' }}  key={service} value={service}>{service}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="severity-select" style={{ marginRight: '8px' }}>Severity:</label>
                <select
                    id="severity-select"
                    onChange={handleSeverityChange}
                    style={{ padding: '5px', minWidth: '150px' }}
                >
                    <option style={{border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff' }}>All</option>
                    {severities.map(severity => (
                        <option style={{border: '1px solid #ddd', padding: '8px', backgroundColor: '#034913ff' }} key={severity} value={severity}>{severity}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}