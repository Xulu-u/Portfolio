import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {deletePatient, updatePatient, getPatientById} from '../../app/services/patientApi';
import { Patient } from '../../common/types/Patient';


const UpdateAndDelete = () => {
        const [patient, setPatient] = useState<Patient>({ name: '', surname: '', date: '' });
        const [isLoading, setIsLoading] = useState(false);

        const { id } = useParams<string>();

        useEffect(() => {
                getPatientById(id as string).then((data) => {
                        setPatient(data as Patient);});
        }, []);

        const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setPatient({ ...patient, name: event.target.value });
        };

        const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setPatient({ ...patient, surname: event.target.value });
        };

        const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setPatient({ ...patient, date: event.target.value });
        };

        const handleUpdateClick = async () => {
                setIsLoading(true);
                try {
                        await updatePatient(id as string, patient as Patient);
                        // Show success message
                } catch (error) {
                        console.error("Error updating patient:", error);
                        // Show error message
                } finally {
                        setIsLoading(false);
                }
        };

        const handleDeleteClick = async () => {
                setIsLoading(true);
                try { 
                        await deletePatient(id as string);
                        setPatient({ ...patient, name: '', surname: '', date: '' });
                } catch (error) {
                        console.error("Error deleting patient:", error);
                        // Show error message
                } finally {
                        setIsLoading(false);
                }
        };
                        

        return(
                <div>    
                        <h1>Update and Delete</h1>
                        <label htmlFor="name">Name: </label>
                <input
                        type="text"
                        id="name"
                        onChange={handleNameChange}
                        value={patient.name}
                />
                <br />

                <label htmlFor="surname">Surname: </label>
                <input
                        type="text"
                        id="surname"
                        onChange={handleSurnameChange}
                        value={patient.surname}
                />
                <br />

                <label htmlFor="date">Date: </label>
                <input 
                        type="date" 
                        id="date" 
                        onChange={handleDateChange} 
                        value={patient.date} 
                />
                <br />

                <button 
                        onClick={handleUpdateClick} 
                        disabled={isLoading}
                >
                        {isLoading ? "Updating..." : "Update"}
                </button>
                <button 
                        onClick={handleDeleteClick} 
                        disabled={isLoading}
                >
                        {isLoading ? "Deleting..." : "Delete"}
                </button>
                </div>
        )
}

export default UpdateAndDelete;