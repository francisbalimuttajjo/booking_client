import { useContext, useState } from "react";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { firebaseConfig } from "../../firebase/firebase";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import api from "../../utils/api";
import useFns from "../profile/useReset";
import UserContext from "../../utils/fns/userContext";

const UseCamera = () => {
  const [camera, setCamera] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(true);

  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const { initialState, updateProfilePic } = useContext(UserContext);
  const { navigate } = useFns();

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  const pickImage = async () => {
    setIsFocused(false);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  //initializing firebase

  initializeApp(firebaseConfig);

  const uploadImage = async () => {
    setLoading(true);

    const storage = getStorage();
    // let name = `${user.email}-${Date.now()}`;
    let name = `bafra`;

    const reference = ref(storage, `${name}.jpg`);

    const img = await fetch(image);

    const convertedImage = await img.blob();

    uploadBytes(reference, convertedImage).then(() => {
      getDownloadURL(reference).then((url) => {
        api
          .updateProfilePicture({
            photo: url,
            email: initialState.user.email,
          })
          .then(() => {
            setLoading(false);
            updateProfilePic(url);
            navigate("Profile");
          })
          .catch((err) => {
            setLoading(false);
          });
      });
    });
  };
  return {
    flipCamera,
    pickImage,
    takePicture,
    hasPermission,
    setHasPermission,
    image,
    setCamera,
    type,
    loading,
    uploadImage,
    isFocused,
    setImage,
  };
};

export default UseCamera;
