/* eslint-disable prettier/prettier */
import { createClient } from "@deepgram/sdk";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet, StatusBar, } from "react-native";
import AudioRecorderPlayer, { AudioEncoderAndroidType, AudioSet, AudioSourceAndroidType, } from "react-native-audio-recorder-player";
import RNFetchBlob from "rn-fetch-blob";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioRecord = () => {
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState("00.00.00");
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState("00.00.00");
  const [duration, setDuration] = useState("00:00:00");
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onStartRecord = async () => {
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVNumberOfChannelsKeyIOS: 2,
    };

    const meteringEnabled = false;

    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.select({
      ios: "hello.m4a",
      android: `${dirs.CacheDir}/hello.mp3`,
    });

    setIsRecording(true);

    const result = await audioRecorderPlayer.startRecorder(
      // path,
      // audioSet,
      // meteringEnabled
    );
    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      return;
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);

    setIsRecording(false);

    console.log(result);
  };

  const onStartPlay = async () => {
    console.log("onStartPlay");
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, Number(recordTime.split(':')[0]) * 60 + Number(recordTime.split(':')[1]) * 1000);

    const msg = await audioRecorderPlayer.startPlayer();
    // console.log(msg);
    audioRecorderPlayer.addPlayBackListener((e) => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      return;
    });
  };

  const onPausePlay = async () => {
    setIsPlaying(false);
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = async () => {
    console.log("onStopPlay");
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();

    setIsPlaying(false);
  };

  const transcribeFile = async () => {
    const url = "https://api.deepgram.com/v1/listen";
    const apiKey = "08df93c46cfa5aa729b7e6bbac93c98e744ed14c"; // Replace with your actual API key

    // STEP 1: Create a Deepgram client using the API key
    const deepgram = createClient("08df93c46cfa5aa729b7e6bbac93c98e744ed14c");
    const audioFilePath = await audioRecorderPlayer.startPlayer();

    const headers = {
      Accept: "application/json",
      Authorization: `Token ${apiKey}`,
      "Content-Type": "audio/wav",
    };

    axios
      .post(url, audioFilePath, { headers: headers })
      .then((response) => {
        console.log(response); // Handle response data
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
      });
  };

  useEffect(() => {
    // return()=>onStopPlay();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.timeBlock}>
        <Text style={styles.timeText}>{recordTime}</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => !isRecording ? onStartRecord() : onStopRecord()}>
          {!isRecording ?
            <MaterialCommunityIcons name="record-circle" size={25} color="white" /> :
            <FontAwesome name="square" size={25} color="white" />}
        </TouchableOpacity>
        <Text style={[styles.textNormal, { marginTop: 15 }]}>{isRecording ? "Listening..." : "Tap to record"}</Text>
      </View>

      <View style={styles.bottom}>

        <Text style={[styles.textNormal, { marginTop: 10 }]}>{isPlaying ? playTime : ""}</Text>

        <View style={styles.bottomActions}>
          {!isPlaying ?
            <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={onStartPlay}>
              <FontAwesome6 name="play" size={20} color="white" />
            </TouchableOpacity>
            :
            <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={onPausePlay}>
              <FontAwesome6 name="pause" size={20} color="white" />
            </TouchableOpacity>}

          <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(230,230,230)', marginLeft: 50 }]} onPress={onStopPlay}>
            <FontAwesome name="square" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  timeBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomActions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    width: '100%'
  },
  bottom: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderColor: 'rgb(220, 220, 220)',
    borderTopWidth: 1,
  },
  timeText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
  textNormal: {
    color: "black",
  },
  button: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 50,
  }
});

export default AudioRecord;
