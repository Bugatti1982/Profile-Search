//import type React from 'react';
import { useEffect, useState } from 'react';
import PotentialCandidatesList from '../components/PotentialCandidatesList';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateList = () => {
  const [PotentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  const removeFromStorage = (
    id: number
  ) => {
      let parsedPotentialCandidates: Candidate[] = [];

      const storedPotentialCandidates = localStorage.getItem('CandidatesTopotential');
      if (typeof storedPotentialCandidates === 'string') {
        parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
      }
      parsedPotentialCandidates = parsedPotentialCandidates.filter(
        (Candidate) => Candidate.id !== id
      );
      setPotentialCandidates(parsedPotentialCandidates);
      localStorage.setItem('CandidatesTopotential', JSON.stringify(parsedPotentialCandidates));
    }


  useEffect(() => {
    const parsedPotentialCandidates = JSON.parse(
      localStorage.getItem('CandidatesTopotential') as string
    );
    setPotentialCandidates(parsedPotentialCandidates);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Candidate List</h1>
      {(!PotentialCandidates?.length || PotentialCandidates?.length === 0) ? (
        <h1 style={{ margin: '16px 0' }}>Add Candidates to your list.</h1>
      ) : (
        <PotentialCandidatesList
          CandidatesPotentials={PotentialCandidates}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default CandidateList;

