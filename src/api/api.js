import axios from 'axios';
import mock from './mock';

const apiUrl = 'https:xxx';

const client = axios.create({
  baseURL: apiUrl,
});

// APIの開発が遅れるため一時的に本番環境でもmockを利用する
mock.run(client);

const callApi = (url) => client.get(url)
  .then((response) => response.data)
  .catch((err) => new Error(err)); // TODO: ErrorBoundary実装

export const getSenshukens = () => callApi('/senshuken');

export const getSenshuken = (id) => callApi(`/senshuken/${id}`);
