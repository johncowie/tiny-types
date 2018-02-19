import 'mocha';
import { given } from 'mocha-testdata';

import { check, isDefined, TinyType } from '../../src';
import { expect } from '../expect';

describe('predicates', () => {

    /** @test {isDefined} */
    describe('::isDefined', () => {
        class UserName extends TinyType {
            constructor(public readonly value: string) {
                super();

                check('UserName', value, isDefined());
            }
        }

        it('ensures that the value is defined', () => {
            expect(() => new UserName('Jan')).to.not.throw;                            // tslint:disable-line:no-unused-expression
        });

        given<any>(
            'Jan',
            '',
            true,
            false,
        ).it('works for any defined value, even the "falsy" ones', (value: any) => {
            expect(new UserName(value)).to.not.throw;                            // tslint:disable-line:no-unused-expression
        });
    });
});
