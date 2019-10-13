import api from '~/services/api';

export const AllBooks = async page => {
  const response = await api.get('volumes', {
    params: {
      q: 'historia',
      langRestrict: 'pt',
      orderBy: 'relevance',
      projection: 'full',
      startIndex: page,
    },
  });
  return response.data;
};

export const FindBook = async id => {
  const response = await api.get(`volumes/${id}`, {
    params: {
      projection: 'full',
    },
  });
  return response.data;
};
