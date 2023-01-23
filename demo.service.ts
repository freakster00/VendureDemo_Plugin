import { Injectable } from '@nestjs/common';
import http from 'http';
@Injectable()
export class DemoService {
    fetchCat(): Promise<string> {
        return new Promise((resolve) => {
          http.get('http://aws.random.cat/meow', (resp) => {
            let data = '';
            resp.on('data', chunk => data += chunk);
            resp.on('end', () => resolve(JSON.parse(data).file));
          });
        });
      }
}
