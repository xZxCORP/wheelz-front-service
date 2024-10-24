import type { UpdateVehicleTransactionData } from '@zcorp/shared-typing-wheelz';

import { Card, CardContent, CardHeader } from '../shared/Card';
import { H2, H3, P, Subtle } from '../shared/typography/Typography';
import { SinisterItem } from '../vehicle/sinister/SinisterItem';
import { ChangeField } from './ChangeField';
import { ChangesList } from './ChangesList';

type Props = {
  data: UpdateVehicleTransactionData;
};
export const UpdateTransactionCard = ({ data }: Props) => {
  const { vin, changes } = data;
  const hasBasicChanges = changes.constructorName || changes.model || changes.year;
  const hasRisksChanges =
    changes.risks && Object.values(changes.risks).some((arr) => arr && arr.length > 0);
  const hasIssuesChanges =
    changes.issues && Object.values(changes.issues).some((arr) => arr && arr.length > 0);
  const hasSinisters = changes.sinisters && changes.sinisters.length > 0;
  return (
    <Card>
      <CardHeader className="border-b border-secondary-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <H2 className="text-secondary-900">Mise à jour du véhicule</H2>
          </div>
          <Subtle className="text-secondary-600">VIN: {vin}</Subtle>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {hasBasicChanges && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <H3 className="text-secondary-800">Modifications des données</H3>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {changes.constructorName && (
                <ChangeField label="Constructeur" value={changes.constructorName} />
              )}
              {changes.model && <ChangeField label="Modèle" value={changes.model} />}
              {changes.year !== undefined && <ChangeField label="Année" value={changes.year} />}
            </div>
          </div>
        )}
        {hasRisksChanges && (
          <div className="space-y-3">
            <H3 className="text-secondary-800">Modifications des risques</H3>
            <div className="space-y-4 rounded-lg bg-secondary-50 p-4">
              {changes.risks?.exterior && (
                <ChangesList
                  items={changes.risks.exterior}
                  title="Risques extérieurs"
                  type="risk"
                />
              )}
              {changes.risks?.mechanical && (
                <ChangesList
                  items={changes.risks.mechanical}
                  title="Risques mécaniques"
                  type="risk"
                />
              )}
              {changes.risks?.generic && (
                <ChangesList items={changes.risks.generic} title="Risques génériques" type="risk" />
              )}
            </div>
          </div>
        )}
        {hasIssuesChanges && (
          <div className="space-y-3">
            <H3 className="text-secondary-800">Modifications des problèmes</H3>
            <div className="space-y-4 rounded-lg bg-secondary-50 p-4">
              {changes.issues?.exterior && (
                <ChangesList
                  items={changes.issues.exterior}
                  title="Problèmes extérieurs"
                  type="issue"
                />
              )}
              {changes.issues?.mechanical && (
                <ChangesList
                  items={changes.issues.mechanical}
                  title="Problèmes mécaniques"
                  type="issue"
                />
              )}
              {changes.issues?.generic && (
                <ChangesList
                  items={changes.issues.generic}
                  title="Problèmes génériques"
                  type="issue"
                />
              )}
            </div>
          </div>
        )}
        {hasSinisters && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <H3 className="text-secondary-800">Modifications des sinistres déclarés</H3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {changes.sinisters?.map((sinister, index) => (
                <SinisterItem key={index} sinister={sinister} />
              ))}
            </div>
          </div>
        )}
        {!hasBasicChanges && !hasRisksChanges && !hasIssuesChanges && !hasSinisters && (
          <div className="py-8 text-center">
            <P className="text-secondary-600">Aucune modification à appliquer</P>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
