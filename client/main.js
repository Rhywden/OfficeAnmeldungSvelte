import { FastRender } from 'meteor/staringatlights:fast-render'
import App from '/imports/ui/App.svelte';

FastRender.onPageLoad(() => {
    new App({
        target: document.getElementById('root')
    });
});

