import React, { useState, type ChangeEvent, type FormEvent } from "react";

interface UploadResponse {
    filename : string,
    content_type: string,
    size: number
}

type UploadFileProps = {
    onSuccessfulUpload: () => void;
}

const BASE_URL = `http://localhost:8000`

const UploadFile: React.FC<UploadFileProps> = (props) => {

    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [response, setResponse] = useState<UploadResponse | null>(null);

    const handleFileChange = (e : ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            setFile(null);
            return;
        }
        setFile(e.target.files[0]);
    }

    // TODO: refresh page/refetch logs 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setIsUploading(false);
            const res = await fetch(`${BASE_URL}/logs/upload_file`, {
                method: "POST",
                body: formData
            });

            if (!res.ok) {
                throw new Error("Upload failed");
            }
            const data: UploadResponse = await res.json();
            setResponse(data);
            props.onSuccessfulUpload();
        } catch (err) {
            alert("Could not upload logs succesfully");
        } finally { 
            setIsUploading(false);
        }
    }

     
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="file" onChange={handleFileChange}/>
                <button type="submit" disabled={!file || isUploading}>
                    {isUploading ? "Uploading" : "Upload"}
                </button>
            </form>
        </div>
    )
}

export default UploadFile;