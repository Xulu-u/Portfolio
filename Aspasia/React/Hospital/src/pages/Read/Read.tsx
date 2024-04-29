import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getPatients } from "../../app/services/patientApi";
import { Patient } from "../../common/types/Patient";

const Read = () => {
        const [patients, setPatients] = useState<Patient[]>([]);

        const consultPatients = () => {getPatients().then(setPatients);}

        useEffect(() => {
                consultPatients();
        }, []);

        return(
                <div>
                        <h1>Patients:</h1>
                        {
                        patients.map(patient => (
                        <h2 key={patient.id}><Link to={`update/${patient.id}`}>{patient.id}</Link> {patient.name} {patient.surname} {patient.date}</h2>
                        ))
                }
                </div>
        )
}

export default Read;