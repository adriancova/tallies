import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, platform }) => {
	const tallyId = url.searchParams.get('tallyId');
	const userId = url.searchParams.get('userId');
	console.log('ke pedo', tallyId, userId);
	const respData = await platform?.env.DB.prepare(
		'SELECT * FROM tally_count WHERE tally_name = ? AND user_id = ?'
	)
		.bind(tallyId, userId)
		.run();
	// const testData =	{
	// 	tallyDescription = 'some description',
	// 	tallyTracked =  true,
	// 	tallyCount=   123
	// }
	return new Response(JSON.stringify(respData));
};

export const POST: RequestHandler = async ({ url, platform }) => {
	const tallyId = url.searchParams.get('tallyId');
	const userId = url.searchParams.get('userId');
	const tallyCount = url.searchParams.get('tallyCount');

	const respData = await platform?.env.DB.prepare(
		'UPDATE tally_count SET amount = ? WHERE user_id = ? AND tally_name = ?'
	)
		.bind(tallyCount, userId, tallyId)
		.run();
	// {
	// 	tallyDescription = 'some description',
	// 	tallyTracked =  true,
	// 	tallyCount=   123
	// }
	return new Response(JSON.stringify(respData));
};
