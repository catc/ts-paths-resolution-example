import { RequestListener } from 'http';
import foo from ':utils/foo'

const handler: RequestListener = (_, res) =>  {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write('Hello World! ' + foo());
	res.end();
}

export default handler