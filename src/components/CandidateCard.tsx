//import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ImCross } from 'react-icons/im';
import { IoIosAddCircleOutline } from "react-icons/io";

type CandidateCardProps = {
  selectedCandidate: Candidate;
  addTopotentialList: (() => void);
  onpotentialList?: boolean | null;
  removeFromStorage: (id: number) => void;
      // e: React.MouseEvent<SVGSVGElement, MouseEvent>,
      //   potentiallyOnpotentialList: boolean | null | undefined,
      //   //potentiallyOnList: boolean | null | undefined,
      //   name: string | null
};

const CandidateCard = ({
  selectedCandidate,
  addTopotentialList,
  onpotentialList,
  removeFromStorage,
}: CandidateCardProps) => {
  return (
    <>
      {selectedCandidate?.id ? (
        <section className='CandidateCard'>
          <figure>
            <img src={`${selectedCandidate.avatar_url}`} />
          </figure>
          <article className='details'>
            <h2>{selectedCandidate.name}</h2>
            <p>
              <strong>Location:</strong> {selectedCandidate.location}
            </p>
            <p>
              <strong>Email:</strong> {selectedCandidate.email}
            </p>
            <p>
              <strong>Company:</strong> {selectedCandidate.company}
            </p>
            <p>
              <strong>Bio:</strong> {selectedCandidate.bio}
            </p>
          </article>
          {onpotentialList ? (
            <aside className='icons'>
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={() =>
                  removeFromStorage(selectedCandidate.id)
                }
              />
            </aside>
          ) : (
            <aside className='icons'>
              <IoIosRemoveCircleOutline
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => removeFromStorage && removeFromStorage(selectedCandidate.id)}
              />
              <IoIosAddCircleOutline
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => //console.log('Holo')}
                addTopotentialList && addTopotentialList()}
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a Candidate.</h1>
      )}
    </>
  );
};

export default CandidateCard;
