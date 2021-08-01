import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGetTranslation(enteredWord) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [translations, setTranslations] = useState([]);

  async function getTranslations() {
    setLoading(true);
    try {
      let res = await axios({
        method: 'GET',
        url: 'https://petapro-translate-v1.p.rapidapi.com/',
        headers: {
          'x-rapidapi-host': 'petapro-translate-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        },
        params: {
          langpair: 'de-en',
          query: enteredWord
        }
      });
      console.log({ res });
      setTranslations(res.data);
      setLoading(false);
    } catch (e) {
      console.log(error);
      setError('error retrieving translation');
      setLoading(false);
    }
  }

  useEffect(() => {
    if (enteredWord) {
      getTranslations();
    }
  }, [enteredWord]);

  return { translations, loading, error };
}
