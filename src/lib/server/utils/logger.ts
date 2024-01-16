import { LOGTAIL_KEY } from '$env/static/private';
import { Logtail } from '@logtail/edge';

if (!LOGTAIL_KEY) {
	throw new Error('LOGTAIL_KEY is not defined');
}

const appLog = new Logtail(LOGTAIL_KEY);

export default appLog;
