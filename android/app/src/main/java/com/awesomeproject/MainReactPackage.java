package com.awesomeproject;

import com.awesomeproject.module.DisplayToastModule;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by samuel on 16-7-21.
 */
public class MainReactPackage extends com.facebook.react.shell.MainReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {



        List<NativeModule> modules = new ArrayList<>();
        modules.addAll(super.createNativeModules(reactContext) == null ? new ArrayList<NativeModule>() :super.createNativeModules(reactContext));

        modules.add(new DisplayToastModule(reactContext));

        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return super.createJSModules();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return super.createViewManagers(reactContext);
    }
}
