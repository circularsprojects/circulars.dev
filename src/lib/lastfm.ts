// https://github.com/scriptex/lastfm-ts-api/blob/e5e57ca980ee3053d4ad387bb20298c2dbc69576/src/types.ts#L1226

export type LastFMRecentTracks = Readonly<{
	recenttracks: {
		track: Array<{
			artist: {
				mbid: string;
				'#text': string;
			};
			streamable: 0 | 1;
			image: Array<{
				'#text': string;
				size: string;
			}>;
			mbid: string;
			album: {
				mbid: string;
				'#text': string;
			};
			name: string;
			url: string;
			date: {
				uts: string;
				'#text': string;
			};
			'@attr'?: {
				nowplaying: 'true';
			};
		}>;
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
	};
}>;