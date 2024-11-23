//import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface CandidatesPotentialsProps {
  CandidatesPotentials: Candidate[];
  removeFromStorage: (id: number) => void
}

const CandidatesPotentialsList = ({
  CandidatesPotentials,
  removeFromStorage,
}: CandidatesPotentialsProps) => {
  console.log(CandidatesPotentials);

  return (
    <>
      <ul>
        {CandidatesPotentials.map((Candidate) => (
          <CandidateCard
            selectedCandidate={Candidate}
            addTopotentialList={() => null}
            key={Candidate.id}
            onpotentialList={true}
            removeFromStorage={removeFromStorage}
          />
        ))}
      </ul>
    </>
  );
};

export default CandidatesPotentialsList;
