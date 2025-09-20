# AccountInfoPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**AccountInfoPost200ResponseUser**](AccountInfoPost200ResponseUser.md) |  | 
**data** | **Dict[str, object]** |  | 

## Example

```python
from better_auth.models.account_info_post200_response import AccountInfoPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AccountInfoPost200Response from a JSON string
account_info_post200_response_instance = AccountInfoPost200Response.from_json(json)
# print the JSON string representation of the object
print(AccountInfoPost200Response.to_json())

# convert the object into a dict
account_info_post200_response_dict = account_info_post200_response_instance.to_dict()
# create an instance of AccountInfoPost200Response from a dict
account_info_post200_response_from_dict = AccountInfoPost200Response.from_dict(account_info_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


