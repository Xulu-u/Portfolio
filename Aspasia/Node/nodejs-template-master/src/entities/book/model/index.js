import GenericModel from '@Application/repository/generic-model';
import Schema from './schema';

const Model = {
    ...GenericModel(Schema),
    getByTitle: title => Schema.findOne({ where: { title } })
};

export default Model;

