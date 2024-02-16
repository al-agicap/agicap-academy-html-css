import {isPlatformBrowser} from '@angular/common';

import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';

import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

declare var Prism: any;

@Injectable()
export class HighlightService {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    }

    highlightAll() {
        if (isPlatformBrowser(this.platformId)) {
            Prism.highlightAll();
        }
    }
}
