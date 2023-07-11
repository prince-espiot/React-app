import React, { useState, ChangeEvent, FormEvent } from 'react';

const JobSeekerPortal = () => {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [cvFile, setCVFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTelephoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTelephone(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCVFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setCVFile(file || null);
  };

  const handleCoverLetterFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setCoverLetterFile(file || null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission with name, telephone, email, CV, and cover letter files
    // You can send the data to your backend API for further processing
    console.log('Name:', name);
    console.log('Telephone:', telephone);
    console.log('Email:', email);
    console.log('CV File:', cvFile);
    console.log('Cover Letter File:', coverLetterFile);
    // Reset form inputs
    setName('');
    setTelephone('');
    setEmail('');
    setCVFile(null);
    setCoverLetterFile(null);
  };

  return (
    <div>
      <h1>Job Seeker Portal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Telephone:</label>
          <input type="text" value={telephone} onChange={handleTelephoneChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Upload CV:</label>
          <input type="file" onChange={handleCVFileChange} />
        </div>
        <div>
          <label>Upload Cover Letter:</label>
          <input type="file" onChange={handleCoverLetterFileChange} />
        </div>
      </form>
    </div>
  );
};

export default JobSeekerPortal;
