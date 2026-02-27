import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiStandardResponse = <TModel extends Type<any>>(
  model: TModel,
  isArray = false,
) => {
  return applyDecorators(
    ApiExtraModels(model), 
    ApiOkResponse({
      schema: {
        properties: {
          statusCode: { type: 'number', example: 200 },
          message: { type: 'string', example: 'عملیات با موفقیت انجام شد' },
          data: isArray 
            ? { type: 'array', items: { $ref: getSchemaPath(model) } }
            : { $ref: getSchemaPath(model) },
        },
      },
    }),
  );
};