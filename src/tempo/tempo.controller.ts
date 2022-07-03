import { Controller, Get, Param } from '@nestjs/common';
import { TempoService } from './tempo.service';

//passando as rotas a seguir
@Controller('tempo')
export class TempoController {
    constructor(private tempoService: TempoService){}

    @Get(':cidade')
    getTempo(@Param() params){
        //pegando os parametros escrito, para passar na service
        return this.tempoService.getTempo(params);
    }
}
