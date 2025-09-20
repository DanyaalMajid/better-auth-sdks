# AccountInfoPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The provider given account id for which to get the account info | 

## Example

```python
from better_auth.models.account_info_post_request import AccountInfoPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountInfoPostRequest from a JSON string
account_info_post_request_instance = AccountInfoPostRequest.from_json(json)
# print the JSON string representation of the object
print(AccountInfoPostRequest.to_json())

# convert the object into a dict
account_info_post_request_dict = account_info_post_request_instance.to_dict()
# create an instance of AccountInfoPostRequest from a dict
account_info_post_request_from_dict = AccountInfoPostRequest.from_dict(account_info_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


