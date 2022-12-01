import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ProjectModule } from './project/project.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [UserModule, ProjectModule, CoreModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
