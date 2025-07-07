import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { provideStorage,  StorageConfig} from '@ionic/storage-angular';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { FactoryProvider, inject, PLATFORM_ID } from '@angular/core';
import { STORAGE_PROVIDER } from './app/providers/storage.provider';

const storageConfig: StorageConfig = {
  name: '__mydb',
  driverOrder: ['indexeddb', 'sqlite', 'localstorage'],
};


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    STORAGE_PROVIDER
  ],
});
