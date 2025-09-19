# ChangePasswordPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | New session token if other sessions were revoked | [optional] 
**user** | [**SignUpEmailPost200ResponseUser**](SignUpEmailPost200ResponseUser.md) |  | 

## Example

```python
from better_auth.models.change_password_post200_response import ChangePasswordPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ChangePasswordPost200Response from a JSON string
change_password_post200_response_instance = ChangePasswordPost200Response.from_json(json)
# print the JSON string representation of the object
print(ChangePasswordPost200Response.to_json())

# convert the object into a dict
change_password_post200_response_dict = change_password_post200_response_instance.to_dict()
# create an instance of ChangePasswordPost200Response from a dict
change_password_post200_response_from_dict = ChangePasswordPost200Response.from_dict(change_password_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


