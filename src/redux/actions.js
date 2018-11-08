export const loadAllGnomes = gnomes => ({
  type: 'LOAD_ALL_GNOMES',
  gnomes: gnomes
});

export const loadFilteredGnomes = filteredGnomes => ({
  type: 'LOAD_FILTERED_GNOMES',
  filteredGnomes
});
