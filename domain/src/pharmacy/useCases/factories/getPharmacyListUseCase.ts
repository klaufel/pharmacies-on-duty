import GetPharmacyListUseCase from '../GetPharmacyListUseCase';
import { httpPharmacyRepository } from '../../repository/factory';
import { fromPharmacyApiResponseToPharmacyEntity } from '../../mappers/factory';

export default function getPharmacyListlUseCase({ config }: DomainUseCase) {
  return new GetPharmacyListUseCase({
    mapper: fromPharmacyApiResponseToPharmacyEntity(),
    repository: httpPharmacyRepository({ config }),
  });
}
