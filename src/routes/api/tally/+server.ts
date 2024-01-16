import type { RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent): Promise<Response> {
	const { tallyId, userId } = event.params;
	console.log('aver si muy vergas', tallyId);
	const respData = await event.platform?.env.DB.prepare(
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
}

export async function POST(event: RequestEvent): Promise<Response> {
	const { tallyId, userId, tallyCount } = event.params;
	console.log('aver si muy vergasx2', tallyId, tallyCount);

	const respData = await event.platform?.env.DB.prepare(
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
}
