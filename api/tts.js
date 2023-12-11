import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// voice, rate, pitch, text,voiceStyle
const speechApi = (ssml) => {
    return new Promise((resolve, reject) => {
        const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
        var synthesizer = new sdk.SpeechSynthesizer(speechConfig);
        synthesizer.speakSsmlAsync(ssml,
            (result) => {
                let { audioData } = result
                const buffer = Buffer.from(audioData);
                synthesizer.close();
                resolve(buffer);
            },
            (err) => {
                console.trace("err - " + err);
                synthesizer.close();
                synthesizer = null;
                reject(err)
            });
    });
};

export default speechApi;

