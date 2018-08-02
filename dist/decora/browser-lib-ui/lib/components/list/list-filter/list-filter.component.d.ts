import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecListTabsFilterComponent } from './../list-tabs-filter/list-tabs-filter.component';
import { DecListAdvancedFilterComponent } from './../list-advanced-filter/list-advanced-filter.component';
import { DecListPreSearch } from './../list.models';
import { FilterGroups } from './../../../services/api/decora-api.model';
export declare class DecListFilterComponent implements OnInit, OnDestroy {
    private route;
    private router;
    count: number;
    showSearchInput: boolean;
    showAdvancedFilter: boolean;
    filterForm: any;
    filterGroups: FilterGroups;
    filterGroupsWithoutTabs: FilterGroups;
    currentStatusFiltered: string;
    tabsFilter: any;
    editionGroupIndex: number;
    name: string;
    loading: boolean;
    isItFirstLoad: boolean;
    private clickableContainerClass;
    private innerDecFilterGroups;
    private currentBase64Filter;
    private tabsFilterSubscription;
    private watchUrlFilterSubscription;
    preSearch: DecListPreSearch;
    showInfoButton: any;
    hasPersistence: boolean;
    search: EventEmitter<any>;
    inputSearch: any;
    tabsFilterComponent: DecListTabsFilterComponent;
    advancedFilterComponent: DecListAdvancedFilterComponent;
    constructor(route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleSearchInput(): void;
    toggleAdvancedFilter($event: any): void;
    onSearch: (appendCurrentForm?: boolean) => void;
    onClear(): void;
    removeDecFilterGroup(groupIndex: any): void;
    editDecFilterGroup(groupIndex: any): void;
    reloadCountReport: (payload: any) => void;
    clearFilterForm: () => void;
    onClickInfo(): void;
    appendToCurrentDecFilterGroups(propertyName: any, propertyValue: any): void;
    closeFilters(): void;
    private reacalculateAndEmitCurrentDecFilterGroups(recount?);
    private reloadFormWithGivenDecFilterGroupe(filters);
    private openFilters();
    private configureAdvancedFilter();
    private watchTabsFilter();
    private stopWatchingTabsFilter();
    private mountCurrentDecFilterGroups();
    private emitCurrentDecFilterGroups(recount?);
    private actByClickPosition;
    private watchClick();
    private stopWatchingClick();
    private componentFilterName();
    private watchUrlFilter();
    private stopWatchingUrlFilter();
    private refreshFilterInUrlQuery();
    private setFilterInUrlQuery(filter);
    private getBase64FilterFromDecFilterGroups();
    private getJsonFromBase64Filter(base64Filter);
}
