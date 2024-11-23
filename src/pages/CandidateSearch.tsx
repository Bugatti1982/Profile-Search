import { type FormEvent, useState } from 'react'
import {  searchGithubUser } from '../api/API';
//searchGithub,
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [potentialCandidate, setpotentialCandidate] = useState<Candidate>({
    id: 0,
    avatar_url: '',
    name: '',
    location: '',
    email: '',
    company: '',
    bio: '',
  });

  const [searchInput, setSearchInput] = useState<string>('');
  //const [listCandidates, setListCandidates] = useState<Candidate[]>([]);

  const addTopotentialList = () => {
    let parsedCandidatesTopotential: Candidate[] = [];
    const storedCandidatesTopotential = localStorage.getItem('CandidatesTopotential');
    if (typeof storedCandidatesTopotential === 'string') {
      parsedCandidatesTopotential = JSON.parse(storedCandidatesTopotential)
      console.log('Add to potential list '+ parsedCandidatesTopotential);
    }
    parsedCandidatesTopotential.push(potentialCandidate);
    localStorage.setItem('CandidatesTopotential', JSON.stringify(parsedCandidatesTopotential));
    console.log('Pushed to storage for list '+ potentialCandidate);
    
  };

  //deleted add Seen it list

  const searchForCandidateByName = async (event: FormEvent, candidateName: string) => {
    event.preventDefault();
    const fetchedCandidate: Candidate = await searchGithubUser(candidateName);
    //const listCandidatesFetched: Candidate[] = await searchGithub();
    
    //setListCandidates(listCandidatesFetched);
    setpotentialCandidate(fetchedCandidate);
  };

  return (
    <>
      <section id='searchSection'>
        <form onSubmit={(event) => searchForCandidateByName(event, searchInput)}>
          <input
            type='text'
            placeholder='Enter a Candidate'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
      <CandidateCard
        selectedCandidate={potentialCandidate}
        addTopotentialList={addTopotentialList} removeFromStorage={function (): void {
          throw new Error('Function not implemented.');
        } }        
      />
    </>
  );
};

export default CandidateSearch;
