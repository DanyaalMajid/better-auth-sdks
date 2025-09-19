# AdminHasPermissionPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**success** | **bool** |  | 

## Example

```python
from better_auth.models.admin_has_permission_post200_response import AdminHasPermissionPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AdminHasPermissionPost200Response from a JSON string
admin_has_permission_post200_response_instance = AdminHasPermissionPost200Response.from_json(json)
# print the JSON string representation of the object
print(AdminHasPermissionPost200Response.to_json())

# convert the object into a dict
admin_has_permission_post200_response_dict = admin_has_permission_post200_response_instance.to_dict()
# create an instance of AdminHasPermissionPost200Response from a dict
admin_has_permission_post200_response_from_dict = AdminHasPermissionPost200Response.from_dict(admin_has_permission_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


