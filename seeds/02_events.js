
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DELETE FROM "events"; ALTER SEQUENCE events_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      var events = [
        {
          id: 1,
          type: 'Race',
          title: 'Red Hot 33K',
          location: 'Moab, UT',
          route: '',
          host_runner_id: 3
        }

        {
          id: 2,
          type: 'Run Club',
          title: 'Denver Trail Runners',
          location: 'Centennial Cone',
          route: '}trqFjsebSoDyChC~ArBgIlP_CZaBgB}C`@yJfEoBcAw@j@kAzC|@jCeDv@_LvAChBuDkBeOpD|A~DgOIkGxF_K}@mE{JcFa@eKuCkEz@eIeAmOsFqEpChGkGmFkCkJc@qLyCiDgAmq@xKgd@fFoFuAmBgKfCp@mFaDsIkA_@gAzDI_D}C{CmA{GMaD~BgEkBzATmAxFyIvGuAnDdEVgDfDA}@uGbAmE[iE~EyEv@oFoEAaC{GiCzFcF`ACxJ_IpL}IqBiEtD_NjAaFxPaBJpAsBiBhA~@qC{ABmXpZ_HxBeCcFf@hHqD}@iBlEtApRwAbGmElBsExIgNaGiChD{F~AiApB`@lJ_EnX^~CuCHzCZ|BkCdCfBxB_FvFo@FlChEpDl@`ExB^jEjGrEVtBlDvCtGvBrUlFrKxIdg@|EO~IrO}BzBVdHcGnDdJbJvCrIc@jNrK`B|AvEJdH|EzCzA`N|BjFxBh@',
          host_runner_id: 1
        }

        {
          id: 3,
          type: 'Casual Run',
          title: 'Evening Run',
          location: 'Park Hill/ Stapleton',
          route: 'u~uqF|}j_SoAYOqEr@ujD`[mAUkd@`BuU|ByFfGqBqRsEcOnAgAsBtCsHfBsRpGkJ~@kKbEyNhVkCPqJlGaSFe^|AsDbGcAlCpA?xpCaKbKvIbBbDrErA`HAnGuCpQdAne@dFfH~BbJhIk@~ErJlLdCLrrBqk@x@c@nEuAN{hAN',
          host_runner_id: 2
        }

        {
          id: 4,
          type: 'Run Club',
          title: 'Denver Trail Runners',
          location: 'Lair o the Bear',
          route: 'ssbqFjhmaSwBxM@vL~Q~YW~GcDjHpI|ClCfFMxCcIpHk@dE~AyAzCvBeCRfG~@zBuB}BwCx@{AApApAg@|BpCm@`D`BEz@`JtEjF^fHjBbDvDwQqAyDxBkDxAvGc@zEdC`CrEiDhFpAvQ{M`Cr@yEtNwPlSrBRhGqEnArGfBx@~AyD|CZ~IaGg@`PhJjBvDmAtAyFhHoHxHeBvDmJ`JPzKaJp@`@]bDeHzVnDzHrDuC`CcJbDmD~KaH`B~@_Da@{LhJyDbLqEhDqC_Da@eDpHqW^iCu@_@mIfIiLHmDjJkHbBeIrIiAjEmGzAgHmBz@wO_JvFmCYmBrDmCoAc@gFqGhEaCUdP}SfCoKdBaBoJfBsIdIkDuA_HjDqC_C`@mEqAeHqBlCrAfDeEjSkByC_@yG{FmIE{FsBOl@aDqBgCiC@vBfCkBvCsGq@~Bg@kC{AoB~@j@iEtHkHHsDaCqDoIiDvDqLAwDqQeYEeMpB}M',
          host_runner_id: 4
        }

        {
          id: 5,
          type: 'Casual Run',
          title: 'Bergen Peak',
          location: 'Elk Meadow Open Space',
          route: 'gvaqFtz`bSoFhFeArWbCzAzGaApChB`AhNOdByAKqA|IsBtBtAb[gDvDu@zJaEFaGdNiCuBoHUwLiI{BgIwFK~@t@aEb@iCrDbHIiEpDjDKgDnD|C^NzEdClFiCmAdChG}BmArBlFdDvE|@yA{@lEwIwFnGzNwDmAbFbIbEAzFvTvIElKlKcKcAvBpDiFWhExCgBj@dAXqApFzA{@k@hMnAIpG{MgIfOBaNmANfAaE_As@bBc@sDoDtE^aBuDjJtAgDwDjNxAdDoAzGcIxD{KjAAh@xBtC_Y^oNoCVrCiMiCbA|@eIwA|Bd@eGsCdDlBcQ}AfBR_EzFwHoGjAyClF_@}@`DsHtBQrE_MeDrDt@cDwCrEaBc@sDjEuImBW_OvB}BdA}IpB@m@qL_DeFiJh@kA}CtAwU`FgE',
          host_runner_id: 5
        }
      ];
    return knex('events').insert(events)
    });
};
