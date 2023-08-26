import { fakeAsync, flush, tick } from "@angular/core/testing";

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

    fit('Asynchronous test example - plain Promise', (() => {
        let test = false;
        console.log('Creating promise');
        setTimeout(() => console.log('setTimeout 1'));
        setTimeout(() => console.log('setTimeout 2'));
        Promise.resolve().then(() => {
            console.log('Resolved promise 1');
            return Promise.resolve();
        }).then(() => {
            console.log('Resolved promise 2');
            test = true;
        });
        console.log('Running assertions');
        expect(test).toBeTruthy();
    }));
});
