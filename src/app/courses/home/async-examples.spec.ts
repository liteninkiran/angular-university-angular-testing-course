import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";

describe('Async Testing Examples', () => {

    it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {
        let test = false;
        setTimeout(() => {
            console.log('running assertions');
            test = true;
            expect(test).toBeTruthy();
            done();
        }, 1000);
    });

    it('Asynchronous test example - setTimeout()', fakeAsync(() => {
        let test = false;
        setTimeout(() => {
            test = true;
        }, 1000);
        flush();
        expect(test).toBeTruthy();
    }));

    fit('Asynchronous test example - plain Promise', fakeAsync(() => {
        let test = false;
        console.log('Creating promise');
        Promise.resolve().then(() => {
            console.log('Resolved promise 1');
            test = true;
            return Promise.resolve();
        }).then(() => {
            console.log('Resolved promise 2');
        });
        flushMicrotasks();
        console.log('Running assertions');
        expect(test).toBeTruthy();
    }));
});
