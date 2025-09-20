# ListAccountsGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**provider_id** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**account_id** | **str** |  | 
**scopes** | **List[str]** |  | 

## Example

```python
from better_auth.models.list_accounts_get200_response_inner import ListAccountsGet200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountsGet200ResponseInner from a JSON string
list_accounts_get200_response_inner_instance = ListAccountsGet200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ListAccountsGet200ResponseInner.to_json())

# convert the object into a dict
list_accounts_get200_response_inner_dict = list_accounts_get200_response_inner_instance.to_dict()
# create an instance of ListAccountsGet200ResponseInner from a dict
list_accounts_get200_response_inner_from_dict = ListAccountsGet200ResponseInner.from_dict(list_accounts_get200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


