import { useState } from 'react';
import {createPatient} from '../../app/services/patientApi';
import {Patient} from '../../common/types/Patient';

const Create = () => {
        const [patient, setPatient] = useState<Patient>({ name: '', surname: '', date: '' });
        const [isLoading, setIsLoading] = useState(false);

        const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setPatient({ ...patient, name: event.target.value });
        };

        const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setPatient({ ...patient, surname: event.target.value });
        };

        const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                setPatient({ ...patient, date: event.target.value });
        };

        const handleSaveClick = async () => {
                setIsLoading(true);
        try {
                await createPatient({ name: patient.name, surname: patient.surname, date: patient.date });
                setPatient({ ...patient, name: '', surname: '', date: '' });
                // Show success message
        } catch (error) {
                console.error("Error creating patient:", error);
                // Show error message
        } finally {
                setIsLoading(false);
        }
        };

        return (
                <div>
                        <h1>Create</h1>
                        <h2>
                                Input your patient name, surname and date, then press save to store it in the database
                        </h2>
                        
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
                                onClick={handleSaveClick} 
                                disabled={isLoading}
                        >
                                {isLoading ? "Saving..." : "Save"}
                        </button>
                </div>
        );
}

export default Create;