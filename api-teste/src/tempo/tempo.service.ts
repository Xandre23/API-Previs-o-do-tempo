import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class TempoService {
    constructor(private httpService: HttpService) {}

      //pegando o parametro digitado, e passando na url
    async getTempo(params){
        let tempo = [];
        //consumindo a api
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${params.cidade}&appid=272e0c760823b0bb118a559dc280d2cf`;
      //excessões de erro
        const { status, data} = await firstValueFrom(
            this.httpService.get(url).pipe(
                catchError((e) => {
                  throw new HttpException(e.response.data, e.response.status);
                }),
              ),
            );
                //fazendo uma verificação simples 
            if (status === 200) {
              tempo = data;
            }
            return tempo;
          }
        }
