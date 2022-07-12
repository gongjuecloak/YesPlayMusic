import {
  FetchArtistAlbumsResponse,
  FetchArtistResponse,
  FetchSimilarArtistsResponse,
} from './api/Artist'
import { FetchAlbumResponse } from './api/Album'
import {
  FetchListenedRecordsResponse,
  FetchUserAccountResponse,
  FetchUserAlbumsResponse,
  FetchUserArtistsResponse,
  FetchUserLikedTracksIDsResponse,
  FetchUserPlaylistsResponse,
} from './api/User'
import {
  FetchAudioSourceResponse,
  FetchLyricResponse,
  FetchTracksResponse,
} from './api/Track'
import {
  FetchPlaylistResponse,
  FetchRecommendedPlaylistsResponse,
} from './api/Playlists'
import { AppleMusicAlbum, AppleMusicArtist } from 'AppleMusic'

export const enum APIs {
  Album = 'album',
  Artist = 'artists',
  ArtistAlbum = 'artist/album',
  Likelist = 'likelist',
  Lyric = 'lyric',
  Personalized = 'personalized',
  Playlist = 'playlist/detail',
  RecommendResource = 'recommend/resource',
  SongUrl = 'song/url',
  Track = 'song/detail',
  UserAccount = 'user/account',
  UserAlbums = 'album/sublist',
  UserArtists = 'artist/sublist',
  UserPlaylist = 'user/playlist',
  SimilarArtist = 'simi/artist',
  ListenedRecords = 'user/record',

  // not netease api
  Artists = 'artistsNotNetease',
  CoverColor = 'cover_color',
  AppleMusicAlbum = 'apple_music_album',
  AppleMusicArtist = 'apple_music_artist',
}

export interface APIsParams {
  [APIs.Album]: { id: number }
  [APIs.Artist]: { id: number }
  [APIs.ArtistAlbum]: { id: number }
  [APIs.Likelist]: void
  [APIs.Lyric]: { id: number }
  [APIs.Personalized]: void
  [APIs.Playlist]: { id: number }
  [APIs.RecommendResource]: void
  [APIs.SongUrl]: { id: string }
  [APIs.Track]: { ids: string }
  [APIs.UserAccount]: void
  [APIs.UserAlbums]: void
  [APIs.UserArtists]: void
  [APIs.UserPlaylist]: void
  [APIs.SimilarArtist]: { id: number }
  [APIs.ListenedRecords]: { id: number; type: number }

  [APIs.Artists]: { ids: number[] }
  [APIs.CoverColor]: { id: number }
  [APIs.AppleMusicAlbum]: { id: number }
  [APIs.AppleMusicArtist]: { id: number }
}

export interface APIsResponse {
  [APIs.Album]: FetchAlbumResponse
  [APIs.Artist]: FetchArtistResponse
  [APIs.ArtistAlbum]: FetchArtistAlbumsResponse
  [APIs.Likelist]: FetchUserLikedTracksIDsResponse
  [APIs.Lyric]: FetchLyricResponse
  [APIs.Personalized]: FetchRecommendedPlaylistsResponse
  [APIs.Playlist]: FetchPlaylistResponse
  [APIs.RecommendResource]: FetchRecommendedPlaylistsResponse
  [APIs.SongUrl]: FetchAudioSourceResponse
  [APIs.Track]: FetchTracksResponse
  [APIs.UserAccount]: FetchUserAccountResponse
  [APIs.UserAlbums]: FetchUserAlbumsResponse
  [APIs.UserArtists]: FetchUserArtistsResponse
  [APIs.UserPlaylist]: FetchUserPlaylistsResponse
  [APIs.SimilarArtist]: FetchSimilarArtistsResponse
  [APIs.ListenedRecords]: FetchListenedRecordsResponse

  [APIs.Artists]: FetchArtistResponse[]
  [APIs.CoverColor]: string | undefined
  [APIs.AppleMusicAlbum]: AppleMusicAlbum | 'no'
  [APIs.AppleMusicArtist]: AppleMusicArtist | 'no'
}
