import { defineNuxtPlugin } from '#app';
import { useStateDevice } from '~/composables/state';
import DeviceDetector from 'node-device-detector';
import DeviceHelper from 'node-device-detector/helper';

export default defineNuxtPlugin((nuxtApp) => {
  const event = nuxtApp.ssrContext?.event;
  if (!event) {
    return;
  }

  const device = useStateDevice();
  const detector = new DeviceDetector();
  const result = detector.detect(event.node.req.headers['user-agent'] as string);
  device.value.isMobile = DeviceHelper.isMobile(result);
  device.value.isMobileOrTablet = DeviceHelper.isMobile(result) || DeviceHelper.isTablet(result);
  device.value.isDesktop = DeviceHelper.isDesktop(result);
});
