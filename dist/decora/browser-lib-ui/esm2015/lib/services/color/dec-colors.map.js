/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const DEC_COLOR_BY_STATUS = {
    ACTIVE: '#097509',
    APPROVED: '#4DBD74',
    COMMITED: '#259844',
    DEFAULT: '#656d74',
    DELETED: '#FF5252',
    DELIVERED: '#4DBD74',
    DELIVERING: '#fadb4d',
    DELIVERY_REJECTED: '#f44336',
    FIX_OPEN: '#259844',
    FIX_REOPEN: '#259844',
    INITIAL: '#656d74',
    JOB_CREATED: '#259844',
    JOB_AVAILABLE: '#fadb4d',
    JOB_IN_DEVELOPMENT: '#63c2de',
    JOB_IN_QA: '#ff9800',
    JOB_DENIED: '#f44336',
    PENDING_RENDER: '#fadb4d',
    PENDING_WORK: '#656d74',
    RENDER_SUCCESS: '#4DBD74',
    RENDER_ERROR: '#FF5252',
    WAITING_SKU_FIX: '#656d74',
    WAITING_MODEL: '#656d74',
    WORKING_ON_IT: '#63c2de',
    IN_DEVELOPMENT: '#63c2de',
    IN_QA: '#63c2de',
    IN_FIX: '#BA68CB',
    DENIED: '#f44336',
    DEVELOPMENT: '#63c2de',
    INACTIVE: '#F4F4F4',
};
export { DEC_COLOR_BY_STATUS };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjLWNvbG9ycy5tYXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVjb3JhL2Jyb3dzZXItbGliLXVpLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbG9yL2RlYy1jb2xvcnMubWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLFFBQVMsU0FBUztJQUNsQixVQUFXLFNBQVM7SUFDcEIsVUFBVyxTQUFTO0lBQ3BCLFNBQVUsU0FBUztJQUNuQixTQUFVLFNBQVM7SUFDbkIsV0FBWSxTQUFTO0lBQ3JCLFlBQWEsU0FBUztJQUN0QixtQkFBb0IsU0FBUztJQUM3QixVQUFXLFNBQVM7SUFDcEIsWUFBYSxTQUFTO0lBQ3RCLFNBQVUsU0FBUztJQUNuQixhQUFjLFNBQVM7SUFDdkIsZUFBZ0IsU0FBUztJQUN6QixvQkFBcUIsU0FBUztJQUM5QixXQUFZLFNBQVM7SUFDckIsWUFBYSxTQUFTO0lBQ3RCLGdCQUFpQixTQUFTO0lBQzFCLGNBQWUsU0FBUztJQUN4QixnQkFBaUIsU0FBUztJQUMxQixjQUFlLFNBQVM7SUFDeEIsaUJBQWtCLFNBQVM7SUFDM0IsZUFBZ0IsU0FBUztJQUN6QixlQUFnQixTQUFTO0lBQ3pCLGdCQUFpQixTQUFTO0lBQzFCLE9BQVEsU0FBUztJQUNqQixRQUFTLFNBQVM7SUFDbEIsUUFBUyxTQUFTO0lBQ2xCLGFBQWMsU0FBUztJQUN2QixVQUFXLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBERUNfQ09MT1JfQllfU1RBVFVTIHtcbiAgQUNUSVZFID0gJyMwOTc1MDknLFxuICBBUFBST1ZFRCA9ICcjNERCRDc0JyxcbiAgQ09NTUlURUQgPSAnIzI1OTg0NCcsXG4gIERFRkFVTFQgPSAnIzY1NmQ3NCcsXG4gIERFTEVURUQgPSAnI0ZGNTI1MicsXG4gIERFTElWRVJFRCA9ICcjNERCRDc0JyxcbiAgREVMSVZFUklORyA9ICcjZmFkYjRkJyxcbiAgREVMSVZFUllfUkVKRUNURUQgPSAnI2Y0NDMzNicsXG4gIEZJWF9PUEVOID0gJyMyNTk4NDQnLFxuICBGSVhfUkVPUEVOID0gJyMyNTk4NDQnLFxuICBJTklUSUFMID0gJyM2NTZkNzQnLFxuICBKT0JfQ1JFQVRFRCA9ICcjMjU5ODQ0JyxcbiAgSk9CX0FWQUlMQUJMRSA9ICcjZmFkYjRkJyxcbiAgSk9CX0lOX0RFVkVMT1BNRU5UID0gJyM2M2MyZGUnLFxuICBKT0JfSU5fUUEgPSAnI2ZmOTgwMCcsXG4gIEpPQl9ERU5JRUQgPSAnI2Y0NDMzNicsXG4gIFBFTkRJTkdfUkVOREVSID0gJyNmYWRiNGQnLFxuICBQRU5ESU5HX1dPUksgPSAnIzY1NmQ3NCcsXG4gIFJFTkRFUl9TVUNDRVNTID0gJyM0REJENzQnLFxuICBSRU5ERVJfRVJST1IgPSAnI0ZGNTI1MicsXG4gIFdBSVRJTkdfU0tVX0ZJWCA9ICcjNjU2ZDc0JyxcbiAgV0FJVElOR19NT0RFTCA9ICcjNjU2ZDc0JyxcbiAgV09SS0lOR19PTl9JVCA9ICcjNjNjMmRlJyxcbiAgSU5fREVWRUxPUE1FTlQgPSAnIzYzYzJkZScsXG4gIElOX1FBID0gJyM2M2MyZGUnLFxuICBJTl9GSVggPSAnI0JBNjhDQicsXG4gIERFTklFRCA9ICcjZjQ0MzM2JyxcbiAgREVWRUxPUE1FTlQgPSAnIzYzYzJkZScsXG4gIElOQUNUSVZFID0gJyNGNEY0RjQnLFxufVxuIl19