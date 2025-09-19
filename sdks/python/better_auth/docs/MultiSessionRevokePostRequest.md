# MultiSessionRevokePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_token** | **str** | The session token to revoke | 

## Example

```python
from better_auth.models.multi_session_revoke_post_request import MultiSessionRevokePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MultiSessionRevokePostRequest from a JSON string
multi_session_revoke_post_request_instance = MultiSessionRevokePostRequest.from_json(json)
# print the JSON string representation of the object
print(MultiSessionRevokePostRequest.to_json())

# convert the object into a dict
multi_session_revoke_post_request_dict = multi_session_revoke_post_request_instance.to_dict()
# create an instance of MultiSessionRevokePostRequest from a dict
multi_session_revoke_post_request_from_dict = MultiSessionRevokePostRequest.from_dict(multi_session_revoke_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


