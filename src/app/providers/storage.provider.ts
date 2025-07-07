import { FactoryProvider, inject, PLATFORM_ID } from '@angular/core';
import { provideStorage, Storage, StorageConfig } from '@ionic/storage-angular';

const storageConfig: StorageConfig = {
  name: '__mydb',
  driverOrder: ['indexeddb', 'sqlite', 'localstorage'],
};

export function storageFactory() {
  const platformId = inject(PLATFORM_ID);
  return provideStorage(platformId, storageConfig);
}

export const STORAGE_PROVIDER: FactoryProvider = {
  provide: Storage,
  useFactory: storageFactory,
};
