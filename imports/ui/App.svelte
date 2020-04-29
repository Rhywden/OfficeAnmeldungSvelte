<script>
    import { Router, Link, Route, navigate } from 'svelte-routing';
    import { Tracker } from 'meteor/tracker';

    import Login from './Login.svelte';
    import Register from './Register.svelte';
    import Email from './Email.svelte';

    export let url = '';

    let currentUser;

    Tracker.autorun(() => {
        currentUser = Meteor.user();
        if(!currentUser) {
            navigate('/login', {replace: true});
        }
    });
</script>

<Router url={url}>
    <Route path="/">
        <Register />
    </Route>
    <Route path="/login">
        <Login />
    </Route>
    <Route path="/email/:token" let:params>
        <Email token={params.token} />
    </Route>
</Router>