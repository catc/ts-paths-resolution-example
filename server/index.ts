import http from 'http'
import handler from './handlers/home'

const PORT = 3000
const HOSTNAME = '127.0.0.1';

const server = http.createServer(handler)

server.listen(3000, HOSTNAME, () => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

