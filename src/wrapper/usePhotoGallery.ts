import { UserPhoto } from '@/interfaces/UserPhotos';
import {
    Camera,
    CameraResultType,
    CameraSource,
} from '@capacitor/camera';
import { ref } from 'vue';


export function usePhotoGallery() {
    const photos = ref<UserPhoto[]>([]);
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });
        const fileName = new Date().getTime() + '.jpeg';
        const savedFileImage = {
            filePath: fileName,
            webviewPath: photo.webPath,
        };

        photos.value = [savedFileImage, ... photos.value];
    };
    
    return {
        takePhoto,
        photos
    };
}