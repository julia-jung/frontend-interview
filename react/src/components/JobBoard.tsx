import { useState, useEffect } from 'react';

interface Job {
  by: string;
  id: number;
  scor?: number;
  time: number;
  title: string;
  type?: string;
  url?: string;
}

export async function fetchJobIdsData(): Promise<number[]> {
  debugger;
  const response = await fetch(
    'https://hacker-news.firebaseio.com/v0/jobstories.json'
  );
  return response.json();
}

export async function fetchJobData(id: number): Promise<Job> {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return res.json();
}

export default function JobBoard() {
  const PAGE_SIZE = 6;
  const [jobIds, setJobIds] = useState<number[] | null>(null);
  const [page, setPage] = useState<number>(0);

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchJobs(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchJobIds = async (page: number): Promise<number[]> => {
    let ids = jobIds ?? [];
    if (!jobIds) {
      debugger;
      ids = await fetchJobIdsData();
      setJobIds(ids);
    }

    const startIndex = page * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return ids.slice(startIndex, endIndex);
  };

  const fetchJobs = async (page: number): Promise<void> => {
    setError(false);
    setIsFetching(true);
    try {
      const ids = await fetchJobIds(page);

      const jobsForPage = await Promise.all(
        ids.map(async (id) => fetchJobData(id))
      );
      setJobs([...jobs, ...jobsForPage]);
    } catch (err) {
      console.error(err);
      setError(true);
    }
    setIsFetching(false);
  };

  return (
    <div className='job-board'>
      <h1 className='job-board__text'>Hacker News Jobs Board</h1>
      {jobIds === null ? (
        <h3 className='job-goard__text'>Loading...</h3>
      ) : (
        <>
          <Jobs jobs={jobs} />
          {error && (
            <h3 className='job-board__text'>Failed to fetch data ...!</h3>
          )}
          {jobs.length < jobIds.length ? (
            <button
              className='job-board__button'
              disabled={isFetching}
              hidden={jobs.length === 0}
              onClick={() => setPage(page + 1)}
            >
              {isFetching ? 'Loading...' : 'Load more jobs'}
            </button>
          ) : (
            <h3 className='job-board__text'>This is the end of the list</h3>
          )}
        </>
      )}
    </div>
  );
}

export function Jobs({ jobs }: { jobs: Job[] }) {
  return (
    <div className='jobs'>
      {jobs.map((job) => (
        <div key={job.id} className='jobs-item'>
          <h4 className='jobs-item__title'>
            {job.url ? <a href={job.url}>{job.title}</a> : job.title}
          </h4>
          <p>
            by {job.by} &middot; {new Date(job.time * 1000).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
