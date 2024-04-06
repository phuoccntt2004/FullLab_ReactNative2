import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent } from '../../components';

// Define types for your tracks
interface Track {
  id: string;
  url: any; // Change this to an appropriate type for your track URLs
  title: string;
}

const tracks: Track[] = [
  {
    id: '1',
    url: require('./tracks/NangChenTieuSau-BichPhuong-14017885.mp3'),
    title: 'Blues Beat',
  },
  {
    id: '2',
    url: require('./tracks/SauLoiTuKhuocThemeSongFromMAI-PhanManhQuynh-13780092.mp3'),
    title: 'Country Song',
  },
  {
    id: '3',
    url: require('./tracks/TungLa-VuCatTuong-13962415.mp3'),
    title: 'Andree Song',
  },
  {
    id: '4',
    url: require('./tracks/BuonHayVuiFeatRptMckObitoRonboogz-VSOULRPTMCKObitoRonboogz-13159599.mp3'),
    title: 'MTP Song',
  },
];

const setUpTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(tracks);
    console.log('Tracks added');
  } catch (e) {
    console.log(e);
  }
};

const TrackPlayerApp: React.FC = () => {
  useEffect(() => {
    setUpTrackPlayer();

    // return () => TrackPlayer.destroy();

  }, []);

  const playTrack = async () => {
    await TrackPlayer.play();
  };

  const pauseTrack = async () => {
    await TrackPlayer.pause();
  };

  const skipToNextTrack = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPreviousTrack = async () => {
    await TrackPlayer.skipToPrevious();
  };

    return (
        <ContainerComponent styles = {{flex: 1,
                justifyContent: 'center',
                backgroundColor: 'black'}}>
            <SectionComponent>
                <RowComponent
                    justify='space-around'>
                    <ButtonComponent 
                        text='Pause'
                        type='orange'
                        styles = {{padding: 10, width: 120}}
                        onPress={pauseTrack}/>
                    <ButtonComponent 
                        text='Play'
                        type='orange'
                        styles = {{padding: 10, width: 120}}
                        onPress={playTrack}/>
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <RowComponent 
                    justify='space-around'>
                    <ButtonComponent 
                        text='Prev'
                        type='orange'
                        styles = {{padding: 10, width: 120}}
                        onPress={skipToPreviousTrack}/>
                    <ButtonComponent 
                        text='Next'
                        type='orange'
                        styles = {{padding: 10, width: 120}}
                        onPress={skipToNextTrack}/>
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    );
};

export default TrackPlayerApp;
